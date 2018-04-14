create table course (course_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null auto_increment, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table hibernate_sequence (next_val bigint) type=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table payment (payment_id bigint not null, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null auto_increment, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null auto_increment, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table payment (payment_id bigint not null auto_increment, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null auto_increment, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null auto_increment, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null auto_increment, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null auto_increment, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null auto_increment, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null auto_increment, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null auto_increment, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table payment (payment_id bigint not null auto_increment, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null auto_increment, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null auto_increment, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null auto_increment, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null auto_increment, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null auto_increment, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
create table course (course_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), department_id bigint not null, primary key (course_id)) type=MyISAM
create table department (department_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (department_id)) type=MyISAM
create table edoc_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table edocument (doc_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), student_id bigint not null, type_id bigint not null, primary key (doc_id)) type=MyISAM
create table exam (exam_id bigint not null auto_increment, active tinyint(1) default 1 not null, date date, course_id bigint not null, exam_term_id bigint not null, primary key (exam_id)) type=MyISAM
create table exam_student (exam_id bigint not null, student_id bigint not null, primary key (exam_id, student_id)) type=MyISAM
create table exam_student_records (exam_term_id bigint not null auto_increment, mark varchar(255), passed bit not null, total_points integer, exam_exam_id bigint, student_id bigint not null, primary key (exam_term_id)) type=MyISAM
create table exam_term (exam_term_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (exam_term_id)) type=MyISAM
create table payment (payment_id bigint not null auto_increment, active tinyint(1) default 1 not null, description varchar(255), value bigint, student_id bigint not null, primary key (payment_id)) type=MyISAM
create table pre_exam_obligation (pre_examoid bigint not null auto_increment, active tinyint(1) default 1 not null, course_id bigint not null, pre_examotype_id bigint not null, primary key (pre_examoid)) type=MyISAM
create table preexamobligation_student (pre_examoid bigint not null, student_id bigint not null, primary key (pre_examoid, student_id)) type=MyISAM
create table pre_exam_obligations_records (pre_examorecords_id bigint not null auto_increment, passed bit not null, points integer, exam_exam_id bigint, student_id bigint not null, primary key (pre_examorecords_id)) type=MyISAM
create table pre_exam_obligation_type (pre_examotype_id bigint not null auto_increment, active tinyint(1) default 1 not null, primary key (pre_examotype_id)) type=MyISAM
create table professor (professor_id bigint not null auto_increment, active tinyint(1) default 1 not null, type_id bigint not null, user_user_id bigint, primary key (professor_id)) type=MyISAM
create table professor_course (professor_id bigint not null, course_id bigint not null, primary key (professor_id, course_id)) type=MyISAM
create table professor_type (type_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(255), primary key (type_id)) type=MyISAM
create table role (role_id bigint not null auto_increment, active tinyint(1) default 1 not null, name varchar(10) not null, primary key (role_id)) type=MyISAM
create table student (student_id bigint not null auto_increment, active tinyint(1) default 1 not null, transcript_number varchar(255) not null, year integer, department_id bigint not null, user_user_id bigint, primary key (student_id)) type=MyISAM
create table students_courses (student_id bigint not null, course_id bigint not null, primary key (student_id, course_id)) type=MyISAM
create table user (user_id bigint not null auto_increment, active tinyint(1) default 1 not null, address varchar(255), date_of_birth date not null, first_name varchar(255) not null, image_path varchar(255), last_name varchar(255) not null, password varchar(255) not null, phone_number varchar(255), username varchar(255) not null, primary key (user_id)) type=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) type=MyISAM
alter table student add constraint UK_2ih2pubta6o6f2w8e1o7naxay unique (transcript_number)
alter table user add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username)
alter table course add constraint FKi1btm7ma8n3gaj6afdno300wm foreign key (department_id) references department (department_id)
alter table edocument add constraint FKbpy2hqsgc3tlfvsxoy19oxd5o foreign key (student_id) references student (student_id)
alter table edocument add constraint FKfld8s8ldjv8b7ybqerqpdgqxa foreign key (type_id) references edoc_type (type_id)
alter table exam add constraint FKiub3ue9cklcyyra24v9ns656n foreign key (course_id) references course (course_id)
alter table exam add constraint FKao6vaekiug3eykw0tq61useg6 foreign key (exam_term_id) references exam_term (exam_term_id)
alter table exam_student add constraint FKrb2qpwwcicth4xdhurwcp8rd foreign key (student_id) references student (student_id)
alter table exam_student add constraint FKsxtyhwwfhtjpf5pqx8p5ogm0w foreign key (exam_id) references exam (exam_id)
alter table exam_student_records add constraint FKp36qq3coa2jmk2jrqho5b1ob4 foreign key (exam_exam_id) references exam (exam_id)
alter table exam_student_records add constraint FK9nh0ot86x1smy089e9dm3qdfj foreign key (student_id) references student (student_id)
alter table payment add constraint FKq0mpbhvyrwyggk1gwjams69wf foreign key (student_id) references student (student_id)
alter table pre_exam_obligation add constraint FKfjy16k6mus9kgg3qos7en3yol foreign key (course_id) references course (course_id)
alter table pre_exam_obligation add constraint FK1iydotwu0chckvjfwy3wpru2 foreign key (pre_examotype_id) references pre_exam_obligation_type (pre_examotype_id)
alter table preexamobligation_student add constraint FKakbp0u8ai28gdk1109jxdig4h foreign key (student_id) references student (student_id)
alter table preexamobligation_student add constraint FKbioi4cdpe4g6pt7bq6xt8tne8 foreign key (pre_examoid) references pre_exam_obligation (pre_examoid)
alter table pre_exam_obligations_records add constraint FKld952ky9td7j55jhqvag8aow9 foreign key (exam_exam_id) references exam (exam_id)
alter table pre_exam_obligations_records add constraint FKr0l6ccg7skeqryl44oit6n2aa foreign key (student_id) references student (student_id)
alter table professor add constraint FK191g1d2cfd773644vdm3ea168 foreign key (type_id) references professor_type (type_id)
alter table professor add constraint FKaev0rsixf1pmc1n0d511nu3d6 foreign key (user_user_id) references user (user_id)
alter table professor_course add constraint FK9vav1h7efyrufkde29cgs2jc0 foreign key (course_id) references course (course_id)
alter table professor_course add constraint FKngc752gy9764vvb40di6lause foreign key (professor_id) references professor (professor_id)
alter table student add constraint FKkh3m8c2tq2tgrgma1iyn7tvmx foreign key (department_id) references department (department_id)
alter table student add constraint FKsvc9hc6l3aquufd0j16gk8anu foreign key (user_user_id) references user (user_id)
alter table students_courses add constraint FKd6vd2y2gdvqap78cu28i6xki5 foreign key (course_id) references course (course_id)
alter table students_courses add constraint FKfbiw8vd6a6fxgjlqi99c977al foreign key (student_id) references student (student_id)
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (role_id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (user_id)
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 1', '1994-05-14', 'Filip', 'Kuzmanovic', '', 'pass', 060662311, 'fk')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 2', '1995-01-04', 'Name', 'LastName', '', 'pass1', 0652321123, 'un')
INSERT INTO user (address, date_of_birth, first_name, last_name, image_path, password, phone_number, username) VALUES ('Address 3', '1996-02-17', 'Name2', 'LastName2', '', 'pass2', 061633311, 'nu')
INSERT INTO role (name) values ('admin')
INSERT INTO role (name) values ('professor')
INSERT INTO role (name) values ('student')
INSERT INTO user_roles (user_id, role_id) values (1, 1)
INSERT INTO user_roles (user_id, role_id) values (2, 2)
INSERT INTO user_roles (user_id, role_id) values (3, 3)
