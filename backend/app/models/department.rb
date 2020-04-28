class Department < ApplicationRecord 
	belongs_to :account
    validates :name, :service, :charge

end
