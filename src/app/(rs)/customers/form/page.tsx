import BackButton from "@/components/ui/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
export default async function CustomerDetails({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string |undefined }>;
}) {
  try {
      const { customerId } = await searchParams;
      console.log({customerId});
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      console.log({customer});

      if (!customer) {
        console.error("Customer not found");
        return (
            <div>
                <h2> Customer id: {customerId} not found</h2>
                <BackButton title="Back" variant={'default'}/>
            </div>
        );
      }

    }
  } catch (error) {
    Sentry.captureException(error);
    console.error(error);
  }

  return <div>form</div>;
}
