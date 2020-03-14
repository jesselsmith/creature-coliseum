class PlayersController < ApplicationController
  def index
    render json: PlayerSerializer.new(Player.all)
  end

  def create
    player = Player.new(player_params(params))
    if player.save
      render json: PlayerSerializer.new(player)
    else
      render json: { message: 'There was an error in player creation' }
    end
  end

  def show
    render_player {}
  end

  def update
    render_player { @player.update(player_params(params)) }
  end

  def destroy
    render_player { @player.destroy }
  end

  private

  def player_params(params)
    params.require(:player).permit(:name, :initiative_bonus, :cr, :url)
  end

  def render_player
    @player = find_player
    if @player
      yield
      render json: PlayerSerializer.new(@player)
    else
      render json: { message: 'That player could not be found' }
    end
  end

  def find_player
    Player.find_by(id: params[:id])
  end
end
