var canvas = new fabric.Canvas('myCanvas');

function new_image()
{
	fabric.Image.formURL("ann.jpeg", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
	
}
