CREATE SCHEMA myschema

create table myschema.mytable (
    id serial primary key,
    name varchar(50) not null,
    age integer not null
);

select * from customers inner join 
orders on customers.id = orders.customer_id
where customers.id = 1;