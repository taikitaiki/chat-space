class GroupsController < ApplicationController
  def new
    @group = Group.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def group_params
    params.require(:post).permit(:name, { :user_ids =>[] })
  end
end
