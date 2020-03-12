class EncountersController < ApplicationController
  respond_to :json

  def index
    render json: EncounterSerializer.new(Character.all)
  end

  def create

  end

  def show

  end

  def update

  end

  def destroy

  end

  private

  def new_encounter_params(params)
    params.require(:encounter).permit(:title)
  end
end
