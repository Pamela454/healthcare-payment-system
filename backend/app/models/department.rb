class Department < ApplicationRecord
	belongs_to :account 
	has_many :payments
	validates :service, :charge, presence: true
end
