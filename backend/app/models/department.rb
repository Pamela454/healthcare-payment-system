class Department < ApplicationRecord
	belongs_to :account 
	validates :service, :charge, presence: true
end
