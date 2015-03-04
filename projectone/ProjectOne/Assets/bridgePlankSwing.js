#pragma strict

var plank : GameObject;
var plankSwingAnimation : Animation;

function OnTriggerEnter(Collision){
	plank.animation.Play();
}
