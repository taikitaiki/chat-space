class MessagesController < ApplicationController
  def index
    @messages = Message.all(message_params)
  end

  def create
  end

  private
  def message_params
    params.permit(:content, :image, :group_id, :user_id)
  end

end
