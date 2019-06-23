class Api::BoxesController < ApplicationController
    before_action :set_box, only: [:show, :update, :destroy]
    
    def index
        render :json => Box.all
    end

    def create
        box = Box.new(box_params)
        if box.save
            render :json => box
        else
            render :json => {message: box.errors}, status: 400
        end

    end

    def show
        render :json => box
    end

    def update
       if box.update(box_params)
        render :json => box 
       else
        render :json => {message: box.errors}, status: 400
       end
    end

    def destroy
        if box.destroy
            render :json => {message: "box has been deleted"}, status: 204
        else
            render :json => {message: "box Not Deleted"}, status: 400
        end
    end

    private

    def set_box
        box = Box.find_by(id: params[:id])
    end

    def box_params
        params.require(:box).permit(:name, :description, :year, :size, :imgUrl )
    end
end
