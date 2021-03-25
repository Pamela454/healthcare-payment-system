class AccountSerializer
  include JSONAPI::Serializer
  attributes :name, :password, :status, :balance, :copay, :insurance
  has_many :departments
  has_many :payments 

end
