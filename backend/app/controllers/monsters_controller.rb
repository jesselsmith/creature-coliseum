class MonstersController < ApplicationController
  def index
    render json: MonsterSerializer.new(Monster.all)
  end

  def create
    
    if (monster_params(params)[:breed_id])
      breed = Breed.find_by(id: monster_params(params)[:breed_id])
      if breed
        monster = breed.new_monster_from_breed(monster_params(params)[:encounter_id])
      end
    else
      monster = Monster.new(monster_params(params))
    end
    if monster.save
      render json: MonsterSerializer.new(monster, { include: [:encounter] })
    else
      render json: { message: 'There was an error in monster creation' }
    end
  end

  def show
    render_monster {}
  end

  def update
    render_monster { @monster.update(monster_params(params)) }
  end

  def destroy
    render_monster { @monster.destroy }
  end

  private

  def monster_params(params)
    params.require(:monster).permit(:name, :initiative_bonus, :cr, :url, :breed_id, :encounter_id)
  end

  def render_monster
    @monster = find_monster
    if @monster
      yield
      render json: MonsterSerializer.new(@monster, { include: [:encounter] })
    else
      render json: { message: 'That monster could not be found' }
    end
  end

  def find_monster
    Monster.find_by(id: params[:id])
  end
end
