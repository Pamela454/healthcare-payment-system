class PaymentSerializer
  include JSONAPI::Serializer
  attributes :amount
  belongs_to :account
end
