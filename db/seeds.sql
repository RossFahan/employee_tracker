INSERT INTO department (name) VALUES
  ('Web Development'),
  ('Game Development'),
  ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES
  ('Frontend Developer', 85000.00, 1),
  ('Backend Developer', 90000.00, 1),
  ('Game Designer', 80000.00, 2),
  ('Marketing Specialist', 55000.00, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Bran', 'Stark', 1, NULL),
  ('Jessica', 'Jones', 2, 1),
  ('Peter', 'Parker', 1, 1),
  ('Daenerys', 'Targaryen', 3, 2),
  ('Jean-Luc', 'Picard', 4, NULL);