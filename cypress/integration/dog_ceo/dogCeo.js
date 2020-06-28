/// <reference types="Cypress" />

describe('Dog ceo API', function() {

    it('returns a list of all dog breeds.', function() {

        cy.request('/breeds/list/all').then((response) => {

            expect(response.status).to.eq(200)
            
            cy.writeFile('cypress/fixtures/breedList.json', 
                {
                    status: response.body.status,
                    message: response.body.message
                }
            )
        })  
    })

    it('verify retriever is within list.', function() {

        cy.request('/breeds/list/all').then((response) => {

            expect(response.status).to.eq(200)

            cy.readFile('cypress/fixtures/breedList.json', response.body.message.retriever)

        })
        
    })

    it('returns a list of sub-breeds for “retriever”.', function() {

        cy.request('/breed/retriever/list').then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('message').have.length(4)
            
            cy.writeFile('cypress/fixtures/retrieverSubBreeds.json', 
                {
                    status: response.body.status,
                    message: response.body.message
                }
            )
        })
        
    })

    it('returns random image', function() {

        cy.request('https://images.dog.ceo/breeds/retriever-golden/n02099601_8005.jpg').then((response) => {
            
            expect(response.status).to.eq(200)
            expect(response).to.have.property('allRequestResponses').have.length(1)

            cy.writeFile('cypress/fixtures/randomImage.json', 
                {
                    status: response.status, 
                    message:response.allRequestResponses='https://images.dog.ceo/breeds/retriever-golden/n02099601_8005.jpg'
                }
            )
                
        })
  
    })
})