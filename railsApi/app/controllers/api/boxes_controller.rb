class Api::BoxesController < ApplicationController
    before_action :set_box, only: [:show, :destroy]
    
    def index
        render :json => Box.all
    end

    def create
        box = Box.new(box_params)
        if box.save
            render :json => box 
            {alert: 'box has been added'}
        else
            render :json => {message: box.errors}, status: 400
        end
    end

    def destroy
        if @box.delete
            render :json => boxes
        else
            render :json => {message: "box Not Deleted"}
        end
    end

    private

    def set_box
        @box = Box.find_by(id: params[:id])
    end

    def box_params
        params.require(:box).permit(:name, :description, :year, :size, :imgUrl, :artist, :location )
    end
end
