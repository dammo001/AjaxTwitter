class DreamsController < ApplicationController
  def index
    if current_user
      @dreams = Dream.where("dreams.personal = false OR #{current_user.id} = dreams.user_id")
    else
      @dreams = Dream.where("dreams.personal = false")
    end
    render :index
  end

  def new
    @dream = Dream.new
    render :new
  end

  def create
    @dream = current_user.dreams.new(dream_params)
    if @dream.save
      redirect_to dream_url(@dream)
    else
      flash[:error] = @dream.errors.full_messages
      render :new
    end
  end

  def destroy
    @dream = Dream.find(params[:id])
    @dream.delete
    redirect_to dreams_url
  end

  def update
    @dream = Dream.find(params[:id])
    if @dream.update(dream_params)
      redirect_to dream_url(@dream)
    else
      flash[:error] = @dream.errors.full_messages
      render :edit
    end
  end

  def edit
    @dream = Dream.find(params[:id])
    render :edit
  end

  def show
    @dream = Dream.find(params[:id])
    render :show
  end

  private

  def dream_params
    params.require(:dream).permit(:title, :body, :personal)
  end
end
