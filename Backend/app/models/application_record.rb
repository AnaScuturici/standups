class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def created_at
    attributes['created_at'].strftime("%a, %b %-d")
  end
end
