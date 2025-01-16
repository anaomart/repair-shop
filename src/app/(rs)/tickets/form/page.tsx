import BackButton from "@/components/ui/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";

export default async function TicketDetails({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { TicketId, customerId } = await searchParams;

    if (!customerId && !TicketId) {
      return (
        <div>
          <h2> Ticket id or customer id required to load ticket form </h2>
          <BackButton title="Back" variant={"default"} />
        </div>
      );
    }
    // for a new ticket form

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      console.log({ customer });

      if (!customer) {
        return (
          <div>
            <h2> Customer id: {customerId} not found</h2>
            <BackButton title="Back" variant={"default"} />
          </div>
        );
      }
      if (!customer.active) {
        return (
          <div>
            <h2> Customer id: {customer.id} is not active</h2>
            <BackButton title="Back" variant={"default"} />
          </div>
        );
      }
    }

    if (TicketId) {
      const Ticket = await getTicket(parseInt(TicketId));
      console.log({ Ticket });

      if (!Ticket) {
        return (
          <div>
            <h2> Ticket id: {TicketId} not found</h2>
            <BackButton title="Back" variant={"default"} />
          </div>
        );
      }

      const customer = await getCustomer(Ticket.customerId);
      console.log({ customer });
      console.log({ Ticket });

    }
  } catch (error) {
    console.error(error);
    return (
      <div>
        <h2> Ticket not found</h2>
        <BackButton title="Back" variant={"default"} />

      </div>
    );
  }

  return <div>form</div>;
}
