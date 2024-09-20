class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  // Testando a classe Vec
  const vec1 = new Vec(1, 2);
  const vec2 = new Vec(2, 3);
  
  console.log(`vec1: (${vec1.x}, ${vec1.y})`);
  console.log(`vec2: (${vec2.x}, ${vec2.y})`);
  
  const vec3 = vec1.plus(vec2);
  console.log(`vec1 + vec2: (${vec3.x}, ${vec3.y})`);
  
  const vec4 = vec1.minus(vec2);
  console.log(`vec1 - vec2: (${vec4.x}, ${vec4.y})`);
  
  console.log(`Comprimento de vec1: ${vec1.length}`);
  console.log(`Comprimento de vec2: ${vec2.length}`);
  console.log(`Comprimento de vec3: ${vec3.length}`);
  console.log(`Comprimento de vec4: ${vec4.length}`);
  