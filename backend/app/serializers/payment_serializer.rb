class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :amount, :account_id 

  #belongs_to :department
end
