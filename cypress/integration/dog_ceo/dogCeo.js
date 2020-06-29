/// <reference types="Cypress" />

describe('Dog ceo API', function() {

    it('returns a list of all dog breeds.', function() {

        cy.request('/breeds/list/all').then((response) => {

            cy.writeFile('cypress/output/breedList.json', 
                {
                    status: response.body.status,
                    message: response.body.message
                }
            )
            
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.have.property('affenpinscher')
            expect(response.body.message).to.have.property('cotondetulear')
            expect(response.body.message).to.have.property('labrador')
            expect(response.body.message).to.have.property('rottweiler')
            expect(Object.keys(response.body.message)).to.have.length.of.at.least(94) 
        })  
    })

    it('verify retriever is within list.', function() {

        cy.request('/breeds/list/all').then((response) => {
            
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.have.property('retriever')
        })   
    })

    it('returns a list of sub-breeds for retriever.', function() {

        cy.request('/breed/retriever/list').then((response) => {

            cy.writeFile('cypress/output/retrieverSubBreeds.json', 
                {
                    status: response.body.status,
                    message: response.body.message
                }
            )
            
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message')
            expect(response.body.message).to.deep.eq(['chesapeake', 'curly', 'flatcoated', 'golden'])     
        })  
    })

    it('returns random image url.', function(randomBreedImageUrl = Cypress.env('random_breed_image_url')) {

        cy.request(randomBreedImageUrl).then((response) => {
            
            cy.writeFile('cypress/output/randomImageUrl.json', 
                {
                    status: response.status, 
                    message:response.body.message  
                }
            )
            
            expect(response.status).to.eq(200)
            expect(response.body.message)
                .to
                .match(/^https:\/\/images.dog.ceo\/breeds\/[a-zA-Z|-]+\/[a-zA-Z|-|\d|_|-]+.(jpg|png|jpeg)$/)   
        })
    })
})
