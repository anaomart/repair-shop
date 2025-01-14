import { pgTable , serial ,varchar , boolean , timestamp , integer, text} from 'drizzle-orm/pg-core'
import {relations } from 'drizzle-orm'

export const customers = pgTable('customers',{
    id: serial('id').primaryKey(),
    firstName: varchar('first_name', {length: 50}).notNull(),
    lastName: varchar('last_name', {length: 50}).notNull(),
    email: varchar('email', {length: 50}).notNull().unique(),
    phone: varchar('phone', {length: 50}).notNull().unique(),
    address1: varchar('address1', {length: 50}).notNull(),
    address2: varchar('address2', {length: 50}),
    city: varchar('city', {length: 50}).notNull(),
    state: varchar('state', {length: 50}).notNull(),
    zip: varchar('zip', {length: 50}).notNull(),
    notes: text('notes'),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(()=>new Date()),
})

export const tickets = pgTable('tickets',{
    id: serial('id').primaryKey(),
    title: varchar('title', {length: 50}).notNull(),
    description: text('description'),
    priority: varchar('priority', {length: 50}).notNull().default("Low"),
    completed: boolean('completed').notNull().default(false),
    tech:varchar('tech').notNull().default('Unassigned'),
    customerId: integer('customer_id').notNull().references(() => customers.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(()=>new Date()),
})

export const customerRelations  = relations(customers,({many}) => ({
    tickets: many(tickets),
}))

export const TicketsRelations  = relations(tickets,({one}) => ({
    customers: one(customers , {
        fields: [tickets.customerId],
        references: [customers.id]
    }),
}))