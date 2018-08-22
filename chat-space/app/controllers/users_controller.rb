class UsersController < ApplicationController
  def edit
  end

  def update
    @user = user.update(user_params)
  end
end
