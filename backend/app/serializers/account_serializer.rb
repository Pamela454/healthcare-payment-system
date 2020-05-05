class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance, :copay, :insurance

  has_many :departments
end
