# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

account = Account.create(name: 'Frieze', password: 'patient12', balance: 110, copay: 20, insurance: 'Aetna', status: 'patient')

department = Department.create(account_id: 1, name: 'pediatrics', service: 'visit', charge: 20)

payment = Payment.create(account_id: 1, amount: 50)