INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 061633311, 'nu')
--sifra = nnn

INSERT INTO role (name) values ('ADMIN')
INSERT INTO role (name) values ('PROFESSOR')
INSERT INTO role (name) values ('STUDENT')

INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)