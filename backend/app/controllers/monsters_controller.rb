class MonstersController < ApplicationController
  def index
    render json: MonsterSerializer.new(Monster.all)
  end

  def create
    monster = Monster.new(Monster_params(params))
    if monster.save
      render json: MonsterSerializer.new(Monster)
    else
      render json: { message: 'There was an error in monster creation' }
    end
  end

  def show
    render_monster
  end

  def update
    render_monster { @monster.update(monster_params(params)) }
  end

  def destroy
    render_monster { @monster.destroy }
  end

  private

  def Monster_params(params)
    params.require(:monster).permit(:name, :initiative_bonus, :cr, :url)
  end

  def render_monster
    @monster = find_monster
    if @monster
      yield
      render json: MonsterSerializer.new(@monster)
    else
      render json: { message: 'That monster could not be found' }
    end
  end

  def find_monster
    Monster.find_by(id: params[:id])
  end
end
