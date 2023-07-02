class Ghost {
    constructor(
        x,
        y,
        width,
        height,
        speed,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        range
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.imageX = imageX;
        this.imageY = imageY;
        this.imageHeight = imageHeight;
        this.imageWidth = imageWidth;
        this.range = range;
        this.randomTargetIndex = parseInt(Math.random() * 4);
        this.target = randomTargetsForGhosts[this.randomTargetIndex];
        setInterval(() => {
            this.changeRandomDirection();
        }, 10000);
    }
}

letInRange() {
    let xDistance = Math.abs(pacman.getMapX() - this.getMapX());
    let yDistance = Math.abs(pacman.getMapY() - this.getMapY());
    if (
        Math.sqrt(xDistance * xDistance + yDistance * yDistance) <=
        this.range
    ) {
        return true;
    }
    return false;
}

changeRandomDirection() {
    let addition = 1;
    this.randomTargetIndex += addition;
    this.randomTargetIndex = this.randomTargetIndex % 4;
}

moveProcess() {
    if (this.isInRange()) {
        this.target = pacman;
    } else {
        this.target = randomTargetsForGhosts[this.randomTargetIndex];
    }
    this.changeDirectionIfPossible();
    this.moveForwards();
    if (this.checkCollisions()) {
        this.moveBackwards();
        return;
    }
}

moveBackwards() {
    switch (this.direction) {
        case 4: // Right
            this.x -= this.speed;
            break;
        case 3: // Up
            this.y += this.speed;
            break;
        case 2: // Left
            this.x += this.speed;
            break;
        case 1: // Bottom
        this.y -= this.speed;
        break;
    }
}

moveForwards() {
    switch (this.direction) {
        case 4: // Right
            this.x += this.speed;
            break;
        case 3: // Up
            this.y -= this.speed;
            break;
        case 2: // Left
            this.x -= this.speed;
            break;
        case 1: // Bottom
            this.y += this.speed;
            break;
    }
}

checkCollisions() {
    let isCollided = false;
    if (
        map[parseInt(this.y / oneBlockSize)][
            parseInt(this.x / oneBlockSize)
        ] == 1 ||
        map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize)
        ] == 1 ||
        map[parseInt(this.y / oneBlockSize)][
            parseInt(this.x / oneBlockSize + 0.9999)
        ] == 1 ||
        map[parseInt(this.y / oneBlockSize + 0.9999)][
            parseInt(this.x / oneBlockSize + 0.9999)
        ] == 1
    ) {
        isCollided = true;
    }
    return isCollided;
}

changeDirectionIfPossible() {
    
}