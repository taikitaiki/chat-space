json.name     @message.user.name
json.content  @message.content
json.time     @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.image    @message.image.url
json.id       @message.id
