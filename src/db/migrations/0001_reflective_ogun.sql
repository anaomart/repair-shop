ALTER TABLE "customer" RENAME TO "customers";--> statement-breakpoint
ALTER TABLE "customers" DROP CONSTRAINT "customer_email_unique";--> statement-breakpoint
ALTER TABLE "customers" DROP CONSTRAINT "customer_phone_unique";--> statement-breakpoint
ALTER TABLE "ticket" DROP CONSTRAINT "ticket_customer_id_customer_id_fk";
--> statement-breakpoint
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "customers" ADD CONSTRAINT "customers_phone_unique" UNIQUE("phone");