const fs = require("fs")



class Container {
    constructor(file) {
        this.file = file
    }

    async saveNewItem (item) {
        let info
        try{
            info = await fs.promises.readFile(`./${this.file}`)
            info = JSON.parse(info)
        }
        catch(e){
            info = []
        }
        const lastItem = info[info.length - 1]
        
        let id = 1

        if (lastItem) {
             id = lastItem.id + 1
        }
        
        item.id = id
        
        info.push(item)
        

        return fs.promises.writeFile(`${this.file}`,JSON.stringify(info, null, 2))
    }

    async getById(id) {
        let info
        try{
            info = await fs.promises.readFile(`./${this.file}`)
            info = JSON.parse(info)
        }
        catch(err){
            console.error("item not found")
        }
        return info.find(item => item.id === id)
    }

    async getAllItems(){
        let info
        try{
            info = await fs.promises.readFile(`./${this.file}`)
            info = JSON.parse(info)
        }catch(err){
            info = []
        }
        return info
    }

    async deleteById(id) {
        let info
        try{
            info = await fs.promises.readFile(`./${this.file}`)
            info = JSON.parse(info)
        }catch(err){
            info = []
        }

        const findProductId = info.findIndex(item => item.id === id)
        
        if (findProductId === -1){
            return
        }
        
        info.splice(findProductId, 1)
        
        return fs.promises.writeFile(`./${this.file}`, JSON.stringify(info, null, 2))
        }

    async deleteAll(){
        return fs.promises.writeFile(`./${this.name}`, " ")

    }

    async getRandom(){
        let info
        let randomItem
        try {
            info = await fs.promises.readFile(`./${this.file}`)
            info = JSON.parse(info)
            randomItem = Math.floor(Math.random() * info.length);
            
            
        } catch (err) {
            console.error("empty list")
        }
        return randomItem;
    }
 
}

module.exports = Container;

