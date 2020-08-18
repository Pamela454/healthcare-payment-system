class Payment < ApplicationRecord
    belongs_to :department
	validates :amount, presence: true
end
