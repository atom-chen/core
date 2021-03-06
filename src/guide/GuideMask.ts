
// class GuideMask extends core.BaseComponent{

//     constructor(){
// 		super();
// 		this.init();
// 	}
// 	private _top:eui.Rect;
// 	private _left:eui.Rect;
// 	private _right:eui.Rect;
// 	private _bottom:eui.Rect;
// 	private _reverseMask:egret.Sprite;
// 	init():void{
// 		this.touchEnabled = false;

// 		this._top = new eui.Rect(1, 1);
// 		this._top.alpha = 0.01;
// 		// this._top.fillColor = 0x51A9F7;
// 		this._top.touchEnabled = true;
// 		this.addChild(this._top);

// 		this._left = new eui.Rect(1, 1);
// 		this._left.alpha = 0.01;
// 		// this._left.fillColor = 0x51A9F7;
// 		this._left.touchEnabled = true;
// 		this.addChild(this._left);

// 		this._right = new eui.Rect(1, 1);
// 		this._right.alpha = 0.01;
// 		// this._right.fillColor = 0x51A9F7;
// 		this._right.touchEnabled = true;
// 		this.addChild(this._right);

// 		this._bottom = new eui.Rect(1, 1);
// 		this._bottom.alpha = 0.01;
// 		// this._bottom.fillColor = 0x51A9F7;
// 		this._bottom.touchEnabled = true;
// 		this.addChild(this._bottom);

// 		this._reverseMask = new egret.Sprite();
// 		this._reverseMask.touchEnabled = false;
// 		this._reverseMask.touchChildren = false;
// 		this.addChild(this._reverseMask);
// 	}
//     private _arrow:eui.Image;
//     show (target:egret.DisplayObject, arrowType:number) {
// 		let bounds = target.getTransformedBounds(egret.MainContext.instance.stage);
// 		// console.log(bounds.x,bounds.y,bounds.width,bounds.height,egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight);
// 		// let point = target.localToGlobal(0,0);
// 		// console.log(point.x,point.y,target.width,target.height);
// 		this._top.width = egret.MainContext.instance.stage.stageWidth;
// 		this._top.height = bounds.y;

// 		this._left.y = bounds.y;
// 		this._left.width = bounds.x;
// 		this._left.height = bounds.height;

// 		this._right.x = bounds.right;
// 		this._right.y = bounds.y;
// 		this._right.width = egret.MainContext.instance.stage.stageWidth - bounds.right;
// 		this._right.height = bounds.height;

// 		this._bottom.y = bounds.y + bounds.height;
// 		this._bottom.width = egret.MainContext.instance.stage.stageWidth;
// 		this._bottom.height = egret.MainContext.instance.stage.stageHeight - this._bottom.y;

// 		this._reverseMask.removeChildren();
// 		this._reverseMask.addChild(this.getReverseMask(bounds));

// 		//1向上指  2向下指 0隐藏箭头
// 		if (arrowType > 0) {
// 			if (!this._arrow) {
// 				this._arrow = new eui.Image('point_1_png');
// 				this._arrow.width = 150;
// 				this._arrow.height = 168;
// 				this._arrow.anchorOffsetX = 75;
// 				this._arrow.anchorOffsetY = 84;
// 				this._arrow.touchEnabled = false;
// 				this.addChild(this._arrow);
// 			}
// 			this._arrow.source = arrowType == 1 ? 'point_1_png' : 'point_2_png';
// 			this._arrow.visible = true;
// 		}else{
// 			if(this._arrow){
// 				this._arrow.visible = false;
// 			}
// 		}
// 		if (this._arrow) {
// 			this._arrow.visible = arrowType > 0;
// 			if(arrowType == 1){
// 				this._arrow.x = bounds.x + bounds.width / 2+ this._arrow.width/2 +5;
// 				this._arrow.y = bounds.y + bounds.height + this._arrow.height/2 - 5;
// 			}else{
// 				this._arrow.x = bounds.x - 10;
// 				this._arrow.y = bounds.y - bounds.height/2 - 10;
// 			}
// 			egret.Tween.removeTweens(this._arrow);
// 			this._arrow.scaleX = this._arrow.scaleY = 0.8;
// 			egret.Tween.get(this._arrow, {loop: true}).to({scaleX:1.2,scaleY:1.2}, 300).to({scaleX:0.8,scaleY:0.8}, 300);
// 		}
// 	}

// 	showWithTransparent():void{
// 		this._top.width = egret.MainContext.instance.stage.stageWidth;
// 		this._top.height = egret.MainContext.instance.stage.stageHeight;
// 		this._left.width = this._left.height = 0;
// 		this._right.width = this._right.height = 0;
// 		this._bottom.width = this._bottom.height = 0;

// 		this._reverseMask.removeChildren();
// 		if(this._arrow){
// 			egret.Tween.removeTweens(this._arrow);
// 			this._arrow.visible = false;
// 		}
// 	}
	
// 	private _reverseSp : egret.Sprite;
// 	private getReverseMask(bounds:egret.Rectangle):egret.Bitmap{
// 		// 绘制一个黑色的Sprite作为反遮罩，然后把下面的遮罩加进去
// 		if(!this._reverseSp){
// 			this._reverseSp = new egret.Sprite();
// 			this._reverseSp.graphics.beginFill(0,0.5);
// 			this._reverseSp.graphics.drawRect(0,0,egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight);
// 			this._reverseSp.graphics.endFill();
// 		}
// 		this._reverseSp.removeChildren();

// 		// 将原来的遮罩图的混合模式设置为擦除,根据显示对象的 Alpha 值擦除背景。Alpha 值不为0的区域将被擦除。
// 		let earseSp = new egret.Sprite();
// 		earseSp.blendMode = egret.BlendMode.ERASE;
// 		let val = Math.max(Math.floor(bounds.width/5),Math.floor(bounds.height/5));
// 		earseSp.graphics.beginFill(0,1);
// 		earseSp.graphics.drawRoundRect(bounds.x,bounds.y,bounds.width,bounds.height,val,val);
// 		earseSp.graphics.endFill();
// 		this._reverseSp.addChild(earseSp);

// 		// 创建一个RenderTexture，把反遮罩绘制上去
//         let renderTex = new egret.RenderTexture();
// 		renderTex.drawToTexture(this._reverseSp);
//         // 用得到的Texture创建一个Bitmap，这样就得到最终的反遮罩位图对象了
// 		return new egret.Bitmap(renderTex);
// 	}
    
//     static show(target:egret.DisplayObject, arrowType:number = 1) {
// 		let guideMask = core.singleton(GuideMask);
// 		if (!guideMask.parent) {
// 			UI.instance.addGuide(guideMask);
// 		}
// 		guideMask.visible = true;
// 		guideMask.show(target, arrowType);
		
// 		//对话框移除
// 		// GuideManager.removeGuideTalkComp();
// 	}
// 	//隐藏 -- 遮罩隐藏visible
// 	static hide() {
// 		let guideMask = core.singleton(GuideMask);
// 		if (guideMask._arrow) {
// 			egret.Tween.removeTweens(guideMask._arrow);
// 		}
// 		guideMask.visible = false;
// 	}
// 	//隐藏 -- 通过显示透明遮罩方式
// 	static hideWithTransparent():void{
// 		let guideMask = core.singleton(GuideMask);
// 		if (!guideMask.parent) {
// 			core.addGuide(guideMask);
// 		}
// 		guideMask.visible = true;
// 		guideMask.showWithTransparent();
		
// 		//对话框移除
// 		GuideManager.removeGuideTalkComp();
// 	}

// 	static isShow():boolean {
// 		let guideMask = core.singleton(GuideMask);
// 		return guideMask.visible;
// 	}

// 	static dispose():void{
// 		var guideMask = core.singleton(GuideMask);
// 		if (guideMask._arrow) {
// 			egret.Tween.removeTweens(guideMask._arrow);
// 		}
// 		if(guideMask.parent){
// 			guideMask.parent.removeChild(guideMask);
// 		}
// 	}
// }