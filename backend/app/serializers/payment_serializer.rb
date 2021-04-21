class PaymentSerializer
  include JSONAPI::Serializer
  attributes :amount, :cardnumber, :expiration, :cvc
  belongs_to :account
end
