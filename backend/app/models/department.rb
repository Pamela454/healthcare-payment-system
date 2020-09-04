class Department < ApplicationRecord
	belongs_to :account 
	validates :name, :service, :charge, :account_id, presence: true
	
end
