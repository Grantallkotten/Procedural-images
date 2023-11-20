#version 150

out vec4 outColor;

in float y;
in vec2 texCoord;
in vec3 exNormal;
uniform sampler2D tex;


void main(void)
{
	// Texture from disc
	vec4 t = texture(tex, texCoord);
	float h = 3.5;

	// Procedural texture
	if(y > h){
		t.r += 0.8;
		t.g += 0.8;
		t.b += 0.8;
	}
	vec3 n = normalize(exNormal);
	float shade = n.y + n.z;
//	if (t.a < 0.01) discard;
//	else
		outColor = t * shade * shade; // Over-emphasized fake light
	
//	outColor = vec4(texCoord.s, texCoord.t, 0, 1);
//	outColor = vec4(n.x, n.y, n.z, 1);
//	outColor = vec4(1) * shade;
}
