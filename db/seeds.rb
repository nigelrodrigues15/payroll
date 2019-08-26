# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Employee.destroy_all
Employee.create({name: 'Nigel Rodrigues', wage: '20'})
Employee.create({name: 'Titus Rodrigues', wage: '50'})
Employee.create({name: 'Person McPerson', wage: '5.50'})
