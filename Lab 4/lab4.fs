#version 410 core

out vec4 out_Color;
in vec2 gsTexCoord;
in vec3 gsNormal;
in float gsHeight;

void main(void)
{
	float shade = normalize(gsNormal).z; // Fake light
    //out_Color = vec4(gsTexCoord.s, gsTexCoord.t, 0.0, 1.0);
    //out_Color = vec4(gsNormal.x, gsNormal.y, gsNormal.z, 1.0);

    vec4 color = vec4(0.2, 0.8, 0.3, 1.0);
    if(gsHeight > 1.05){
        color = vec4(1.0, 1.0, 1.0, 1.0);
    }
      if(gsHeight < 1.01){
        color = vec4(0.0, 0.3, 0.8, 1.0);
    }
    out_Color = color*shade;

}

