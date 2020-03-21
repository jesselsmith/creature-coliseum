class BreedsController < ApplicationController
  def index
    render json: BreedSerializer.new(Breed.all)
  end

  def show
    render_breed
  end

  private

  def render_breed
    @breed = find_breed
    if @breed
      render json: BreedSerializer.new(@breed)
    else
      render json: { message: 'That breed could not be found' }
    end
  end

  def find_breed
    breed.find_by(id: params[:id])
  end
end
