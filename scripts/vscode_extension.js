// VS Code cursor effect
    let vscodeCursor = document.getElementById('vscode-cursor');
    let isOverCode = false;

    document.addEventListener('mousemove', function(e) {
      if (isOverCode) {
        vscodeCursor.style.left = e.clientX + 'px';
        vscodeCursor.style.top = e.clientY + 'px';
        vscodeCursor.style.opacity = '1';
      } else {
        vscodeCursor.style.opacity = '0';
      }
    });

    // Show cursor over code blocks
    document.querySelectorAll('.code-example').forEach(codeBlock => {
      codeBlock.addEventListener('mouseenter', () => {
        isOverCode = true;
      });
      
      codeBlock.addEventListener('mouseleave', () => {
        isOverCode = false;
      });
    });

    // Scroll reveal animation
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.content-section');
      
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    }

    // Interactive extension cards
    function addExtensionCardEffects() {
      const extensionCards = document.querySelectorAll('.extension-card');
      
      extensionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          const logo = this.querySelector('.extension-logo');
          logo.style.transform = 'scale(1.1) rotate(5deg)';
          logo.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
          const logo = this.querySelector('.extension-logo');
          logo.style.transform = '';
          logo.style.boxShadow = '';
        });
      });
    }

    // Install step interactions
    function addInstallStepEffects() {
      const installSteps = document.querySelectorAll('.install-step');
      
      installSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
          const stepNumber = this.querySelector('.step-number');
          stepNumber.style.transform = 'scale(1.2)';
          stepNumber.style.boxShadow = '0 5px 15px rgba(34, 197, 94, 0.4)';
          
          // Highlight connected steps
          installSteps.forEach((otherStep, otherIndex) => {
            if (Math.abs(index - otherIndex) <= 1) {
              otherStep.style.opacity = '1';
            } else {
              otherStep.style.opacity = '0.7';
            }
          });
        });
        
        step.addEventListener('mouseleave', function() {
          const stepNumber = this.querySelector('.step-number');
          stepNumber.style.transform = '';
          stepNumber.style.boxShadow = '';
          
          // Reset all steps
          installSteps.forEach(otherStep => {
            otherStep.style.opacity = '';
          });
        });
      });
    }

    // Productivity boost hover effects
    function addBoostEffects() {
      const boostCards = document.querySelectorAll('.productivity-boost');
      
      boostCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          const icon = this.querySelector('.boost-icon');
          icon.style.transform = 'scale(1.3) rotate(10deg)';
          icon.style.textShadow = '0 0 20px rgba(34, 197, 94, 0.6)';
        });
        
        card.addEventListener('mouseleave', function() {
          const icon = this.querySelector('.boost-icon');
          icon.style.transform = '';
          icon.style.textShadow = '';
        });
      });
    }

    // Extension benefits animation
    function addBenefitsEffects() {
      const benefitLists = document.querySelectorAll('.extension-benefits ul');
      
      benefitLists.forEach(list => {
        const items = list.querySelectorAll('li');
        
        list.addEventListener('mouseenter', function() {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.transform = 'translateX(10px)';
              item.style.color = '#22c55e';
            }, index * 100);
          });
        });
        
        list.addEventListener('mouseleave', function() {
          items.forEach(item => {
            item.style.transform = '';
            item.style.color = '';
          });
        });
      });
    }

    // Reading progress indicator
    function addReadingProgress() {
      const progressBar = document.createElement('div');
      progressBar.style.position = 'fixed';
      progressBar.style.top = '0';
      progressBar.style.left = '0';
      progressBar.style.width = '0%';
      progressBar.style.height = '3px';
      progressBar.style.background = 'linear-gradient(90deg, #22c55e, #10b981)';
      progressBar.style.zIndex = '1001';
      progressBar.style.transition = 'width 0.25s ease';
      
      document.body.appendChild(progressBar);
      
      window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      });
    }

    // Initialize all effects
    document.addEventListener('DOMContentLoaded', function() {
      // Set up scroll reveal
      window.addEventListener('scroll', revealOnScroll);
      revealOnScroll(); // Check initial state
      
      // Add interactive effects
      addExtensionCardEffects();
      addInstallStepEffects();
      addBoostEffects();
      addBenefitsEffects();
      addReadingProgress();
      
      // Animate extension showcase on load
      const extensionIcons = document.querySelectorAll('.extension-showcase .extension-icon');
      extensionIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(50px) scale(0.8)';
        icon.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
          icon.style.opacity = '1';
          icon.style.transform = 'translateY(0) scale(1)';
        }, 300 + index * 150);
      });
    });

    console.log('Tell Me More Tech - VS Code Extensions Article loaded! ⚡🛠️');