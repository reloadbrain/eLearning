INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', 'zz.jpg', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', 'default.jpeg', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', 'default.jpeg', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 061633311, 'nu')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username, active) VALUES ('Address 41', '1991-05-14', 'Neak', 'Neaktivan', 'default.jpg', '$2a$10$Bx1DUNCVK4MfhUcX7d5D3uMqtkZLNQ.jNwnHvQWHiFU/7JSwv4TJu', 060662311, 'deac', false)
--sifra = nnn

INSERT INTO role (name) values ('ADMIN')
INSERT INTO role (name) values ('PROFESSOR')
INSERT INTO role (name) values ('STUDENT')

INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (1, 2)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (2, 3)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
INSERT INTO user_roles (user_id, role_id) values (4, 3)

--INSERT INTO student (transcript_number, year, user_user_id, department_id) VALUES (12345, 1, 1, 1); --nema departmana jos
--INSERT INTO student (transcript_number, year, user_user_id, department_id) VALUES (11345, 1, 2, 1);
--INSERT INTO student (transcript_number, year, user_user_id, department_id) VALUES (22345, 2, 3, 1);

