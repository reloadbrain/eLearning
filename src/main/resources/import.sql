INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')

INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')

INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)

