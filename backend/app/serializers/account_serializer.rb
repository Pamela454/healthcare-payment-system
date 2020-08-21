class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance, :copay, :insurance, :departments, :payments

  #has_many :departments

  #def departments
    #object.departments.collect do |department|
     # { :id => department.id, :service => department.service, :charge => department.charge}
    #end
  #end
  
end
