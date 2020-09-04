class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :service, :charge, :account_id

  #has_many :payments
  #belongs_to :account

  #def payments
   # object.payments.collect do |payment|
    #  { :id => payment.id, :amount => payment.amount, :department_id => payment.department_id}
    #end
  #end
  
end
