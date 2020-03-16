class EncountersController < ApplicationController
  def index
    render json: EncounterSerializer.new(Encounter.all, include: [:monsters, :players])
  end

  def create
    encounter = Encounter.new(encounter_params(params))
    if encounter.save
      render json: EncounterSerializer.new(encounter)
    else
      render json: { message: 'There was an error in encounter creation' }
    end
  end

  def show
    render_encounter {}
  end

  def update
    render_encounter { 
      @encounter.update(encounter_params(params))
    }
  end

  def destroy
    render_encounter { @encounter.destroy }
  end

  private

  def encounter_params(params)
    params.require(:encounter).permit(:title)
  end

  def render_encounter
    @encounter = find_encounter
    @options = { include: [:monsters, :players] }
    if @encounter
      yield
      render json: EncounterSerializer.new(@encounter, @options)
    else
      render json: { message: 'That encounter could not be found' }
    end
  end

  def find_encounter
    Encounter.find_by(id: params[:id])
  end
end
