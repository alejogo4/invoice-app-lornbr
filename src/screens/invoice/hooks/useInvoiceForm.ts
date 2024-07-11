import {useNavigation} from '@react-navigation/native';
import {
  addInvoice,
  IAddress,
  IInvoice,
  IItem,
  updateInvoice,
} from '@src/store/actions/invoiceActions';
import {addDaysToDate} from '@src/utils/date';
import {generateInvoiceID} from '@src/utils/strings';
import {useForm, UseFormReturn} from 'react-hook-form';
import {useDispatch} from 'react-redux';

interface UseInvoiceFormProps {
  editing?: boolean;
  initialData?: IInvoice;
}

interface UseInvoiceFormReturn {
  methods: UseFormReturn<any>;
  onSaveDraft: (data: any) => void;
  onSaveAndSend: (data: any) => void;
  onUpdate: (data: any) => void;
  onHandleCancelFlow: () => void;
}

function calculateTotal(items: IItem[]): number {
  return items.reduce((total, item) => total + item.total, 0);
}

export const useInvoiceForm = ({
  editing,
  initialData,
}: UseInvoiceFormProps): UseInvoiceFormReturn => {
  const methods = useForm({
    defaultValues: editing ? {...initialData} : {},
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const mapDataToInvoice = (data: any, status: string): IInvoice => {
    const senderAddress: IAddress = {
      street: data.senderAddress.street,
      city: data.senderAddress.city,
      postCode: data.senderAddress.postCode,
      country: data.senderAddress.country,
    };

    const clientAddress: IAddress = {
      street: data.clientAddress.street,
      city: data.clientAddress.city,
      postCode: data.clientAddress.postCode,
      country: data.clientAddress.country,
    };

    const items: IItem[] = data.items.map((item: any) => ({
      name: item.name,
      quantity: parseInt(item.quantity, 10),
      price: parseFloat(item.price),
      total: parseFloat(item.total),
    }));

    const invoice: IInvoice = {
      id: editing ? initialData?.id ?? '' : generateInvoiceID(),
      createdAt: data.createdAt,
      paymentDue: addDaysToDate(data.createdAt, data.paymentTerms),
      description: data.description,
      paymentTerms: data.paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status,
      senderAddress,
      clientAddress,
      items,
      total: calculateTotal(items),
    };

    return invoice;
  };

  const onSaveDraft = (data: any) => {
    const invoice = mapDataToInvoice(data, 'draft');
    dispatch(addInvoice(invoice));
    navigation.navigate('Invoices');
  };

  const onSaveAndSend = (data: any) => {
    const invoice = mapDataToInvoice(data, 'pending');
    dispatch(addInvoice(invoice));
    navigation.navigate('Invoices');
  };

  const onUpdate = (data: any) => {
    const invoice = mapDataToInvoice(data, 'pending');
    dispatch(updateInvoice(invoice));
    navigation.navigate('Invoices');
  };

  const onHandleCancelFlow = () => {
    navigation.goBack();
  };

  return {
    methods,
    onSaveDraft,
    onSaveAndSend,
    onUpdate,
    onHandleCancelFlow,
  };
};
