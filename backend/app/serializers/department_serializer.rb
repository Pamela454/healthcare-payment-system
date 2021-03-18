class DepartmentSerializer
  include JSONAPI::Serializer
  attributes :name, :service, :charge
  belongs_to :account
end
