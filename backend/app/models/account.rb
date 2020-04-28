class Account < ApplicationRecord
    has_many :departments
    validates :name, :balance, :insurance

end